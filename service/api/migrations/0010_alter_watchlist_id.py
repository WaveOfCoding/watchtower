# Generated by Django 4.1.2 on 2022-10-14 17:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_watchlist_rating_alter_watchlist_watch_list'),
    ]

    operations = [
        migrations.AlterField(
            model_name='watchlist',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
