from pydantic import Field
from pydantic_settings import BaseSettings


class Config(BaseSettings):
    HOST: str = Field("0.0.0.0", json_schema_extra={"env": "HOST"})
    PORT: int = Field(8000, json_schema_extra={"env": "PORT"})
    DEBUG: bool = Field(True, json_schema_extra={"env": "DEBUG"})

    OLLAMA_API_URL: str = Field(..., json_schema_extra={"env": "OLLAMA_API_URL"})
    OLLAMA_MODEL_NAME: str = Field(..., json_schema_extra={"env": "OLLAMA_MODEL_NAME"})

    REDIS_URI: str = Field(..., json_schema_extra={"env": "REDIS_URI"})

    DB_URI: str = Field(..., json_schema_extra={"env": "DB_URI"})

    model_config = {"extra": "allow", "env_file": ".env"}


config = Config()
