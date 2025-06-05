import random
from app.autograding.redis import client


def random_component(component_type, component_map: dict):
    """Selects a random component from the component map."""
    if component_type not in ["llm"]:
        raise ValueError(f"Invalid component type: {component_type}")

    # Get the hash containing the sum total scores for the given commponent_type
    values = client.hgetall(f"{component_type}_score_values")
    # Get the hash containing the number of times each component has been voted on
    counts = client.hgetall(f"{component_type}_score_counts")

    # Get all the valid component names from the component map
    names = component_map.keys()

    # Loop over those valid names and use them to calculate the average score for each
    # Add average score to a dictionary
    avg_scores = {}
    for name in names:
        score = int(values.get(name, 1))
        count = int(counts.get(name, 1))
        avg = score / count
        # Ensure that the minimum average score is 0.2 to prevent names with very few
        # total votes from having a zero selection probability.
        avg_scores[name] = max(avg, 0.2)

    # Do a weighted random selection
    sum_scores = sum(avg_scores.values())
    random_val = random.uniform(0, sum_scores)
    cumulative = 0
    for name, score in avg_scores.items():
        cumulative += score
        if random_val <= cumulative:
            return name


def score_evalutaion(score: int, llm: str) -> None:
    score = min(max(score, 0), 1)

    client.hincrby("llm_score_values", llm, score)
    client.hincrby("llm_score_counts", llm, 1)


def get_scores():
    aggregate = {"llm": {}}

    for component_type in aggregate.keys():
        values = client.hgetall(f"{component_type}_score_values")
        counts = client.hgetall(f"{component_type}_score_counts")

        names = values.keys()

        for name in names:
            score = int(values.get(name, 1))
            count = int(counts.get(name, 1))
            avg = score / count
            aggregate[component_type][name] = avg

    return aggregate
