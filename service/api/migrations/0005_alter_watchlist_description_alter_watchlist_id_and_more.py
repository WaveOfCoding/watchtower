# Generated by Django 4.1.2 on 2022-10-14 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_watchlist_rating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='watchlist',
            name='description',
            field=models.TextField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='watchlist',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='watchlist',
            name='rating',
            field=models.PositiveSmallIntegerField(blank=True, choices=[(1, 'Ok'), (2, 'Fine'), (3, 'Good'), (4, 'Amazing'), (5, 'Incredible')]),
        ),
        migrations.AlterField(
            model_name='watchlist',
            name='watch_list',
            field=models.BooleanField(blank=True),
        ),
    ]
