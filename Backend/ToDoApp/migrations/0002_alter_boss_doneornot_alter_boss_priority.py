# Generated by Django 4.1.1 on 2022-11-02 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ToDoApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='boss',
            name='doneOrNot',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='boss',
            name='priority',
            field=models.IntegerField(blank=True),
        ),
    ]
