from flask import Flask

from api.posts import posts_bp


def create_app():
    app = Flask(__name__)

    app.register_blueprint(posts_bp, url_prefix="/api/v1")

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
