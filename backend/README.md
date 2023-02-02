https://virtualenvwrapper.readthedocs.io/en/latest/
mkvirtualenv tera-project
workon tera-projec

cd backend
pip install -r requirements.txt

python manage.py makemigrations
python manage.py migrate

python manage.py runserver

fixtures

python manage.py loaddata fixtures/course_api.json
