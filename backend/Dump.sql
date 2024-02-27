create table pacientes (
  id serial primary key,
  nome_completo text not null,
  RG integer not null unique,
  CPF integer not null unique,
  convenio text,
  celular integer not null
  )
