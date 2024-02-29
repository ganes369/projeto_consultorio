create table pacientes (
  id serial primary key,
  nome text not null,
  telefone text not null,
  endereco text not null,
  cidade text not null,
  CPF integer not null unique,
  RG integer not null unique,
  convenio text,
  codigo_carteira_saude text,
  medico_principal text not null,
  data_nascimento text not null  
  )

  create table convenios (
  id serial primary key,
  Nome text not null,
  Convenio text not null,
  Codigo_Referenciado text,
  Usuario integer not null,
  Senha text not null
  )
