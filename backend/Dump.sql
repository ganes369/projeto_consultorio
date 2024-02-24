create table pacientes (
  id serial primary key,
  nome_completo text not null,
  RG integer not null,
  CPF integer not null,
  convenio text,
  celular integer not null
  )
