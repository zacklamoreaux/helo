create table if not exists posts (
  id serial primary key,
  title varchar(45),
  img text,
  content text,
  author_id integer references users.id
)