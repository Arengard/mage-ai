import os

SERVER_HOST = os.getenv('HOST', 'localhost')
SERVER_PORT = os.getenv('PORT', 5789)

DATA_PREP_SERVER_PORT = os.getenv('DATA_PREP_SERVER_PORT', 6789)

DATAFRAME_OUTPUT_SAMPLE_COUNT = 10

VERSION = '0.7.25'
