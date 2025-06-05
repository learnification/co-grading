from loguru import logger
import sys

logger.remove()

logger.add(sys.stdout, format="{time} {level} {message}", level="INFO")
logger.add(
    "logs/app.log", rotation="3 MB", format="{time} {level} {message}", level="DEBUG"
)
