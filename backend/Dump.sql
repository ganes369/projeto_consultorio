create table pacientes (
  id serial primary key,
  nome text not null,
  telefone text not null,
  endereco text not null,
  cidade text not null,
  CPF varchar(14) not null unique,
  RG varchar(20) not null unique,
  convenio text,
  codigo_carteira_saude text,
  medico_principal text not null,
  data_nascimento text not null  
  )

  create table convenios (
  id serial primary key,
  convenio text not null,
  valor_consulta text not null,
  tipo_cobranca text not null,
  profissional_1 text,
  profisional_2 text,
  profissional_3 text,
  profissional_4 text,
  profissional_5 text,
  profissional_6 text,
  profissional_7 text,
  codigo_referenciado text,
  Usuario text,
  Senha text
  )

  create table medicos (
  id serial primary key,
  nome_completo text not null,
  telefone1 text not null, 
  telefone2 text, 
  telefone3 text, 
  numero_sala integer not null unique,
  conselho text not null unique,
  obs text
  )

  create table controle_receituarios (
  id serial primary key,
  data varchar(10) not null,
  medico text not null,
  receituario varchar(40),
  mes varchar(10) not null
  )