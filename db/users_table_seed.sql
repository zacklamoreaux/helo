create table if not exists users (
  id serial primary key,
  username varchar(20),
  password varchar(20),
  profile_pic text
)