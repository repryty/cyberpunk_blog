from flask import Blueprint
import psycopg2

posts_bp = Blueprint("posts", __name__)

@posts_bp.route('/', methods='GET')
def get_post_list(): # /api/v1/posts/ POST 요청 => 게시물 목록
    with psycopg2.connect(database=)