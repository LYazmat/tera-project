## Backend Inital Configs - Django [![django](https://img.shields.io/badge/Django-FFFFFF?style=flat&logo=django&logoColor=green)](https://www.djangoproject.com)

- Go to folder backend

```console
cd backend
```

- Install the dependences

```console
pip install -r requirements.txt
```

- Run migrations

```console
python manage.py migrate
```

- Run backend server (default port is :8000)

```console
python manage.py runserver
```

- Create a admin user

```console
python manage.py createsuperuser
```

- To include inital data from fixtures (basically register some courses)

```console
python manage.py loaddata fixtures/course_api.json
```

- Admin page

```http
http://localhost:8000/admin
```

- List of API endpoints

```http
http://localhost:8000/docs/
```

<div style='text-align: center;'>

You can see all documentation about Django and Django Rest Framework bellow:

[![django](https://img.shields.io/badge/Django-FFFFFF?style=flat&logo=django&logoColor=green)](https://www.djangoproject.com) [![django](https://img.shields.io/badge/DRF-FFFFFF?style=flat&logo=django&logoColor=green)](https://www.django-rest-framework.org)

</div>
