from pydantic import Field
from pydantic_settings import BaseSettings


class Config(BaseSettings, extra="allow"):
    HOST: str = Field("0.0.0.0", env="HOST")
    PORT: int = Field(8000, env="PORT")
    DEBUG: bool = Field(True, env="DEBUG")

    OLLAMA_API_URL: str = Field(..., env="OLLAMA_API_URL")
    OLLAMA_MODEL_NAME: str = Field(..., env="OLLAMA_MODEL_NAME")

    REDIS_URI: str = Field(..., env="REDIS_URI")

    DB_URI: str = Field(..., env="DB_URI")

    class Config:
        env_file = ".env"


config = Config()
