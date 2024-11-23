create database if not exists barbershop;

use barbershop;

create table if not exists ranks(
    id int primary key auto_increment,
    name varchar(255) not null
);

create table if not exists services(
    id int primary key auto_increment,
    name varchar(255) not null,
    price int not null,
    duration int not null,
    description varchar(255) not null
);

create table if not exists barbershops(
    id int primary key auto_increment,
    name varchar(255) not null,
    address varchar(255) not null,
    latitude varchar(255) not null,
    longitude varchar(255) not null,
    phone varchar(255) not null
);

create table if not exists barbers(
    id int primary key auto_increment,
    first_name varchar(255) not null,
    second_name varchar(255) not null,
    surname varchar(255) not null,
    photo varchar(255) not null,
    info varchar(255) not null,
    rank_id int not null,
    barbershop_id int not null,
    foreign key (barbershop_id) references barbershops(id),
    foreign key (rank_id) references ranks(id)
);

create table if not exists customers(
    id int primary key auto_increment,
    first_name varchar(255) not null,
    second_name varchar(255) not null,
    surname varchar(255) not null,
    phone varchar(255) not null,
    email varchar(255) not null unique,
    password varchar(255) not null
);

create table if not exists reviews(
    id int primary key auto_increment,
    rating int not null,
    date date not null,
    text varchar(255) not null,
    barber_id int not null,
    customer_id int not null,
    foreign key (barber_id) references barbers(id),
    foreign key (customer_id) references customers(id)
);

create table if not exists records(
    id int primary key auto_increment,
    date date not null,
    time time not null,
    comment varchar(255) not null,
    customer_id int not null,
    barber_id int not null,
    foreign key (customer_id) references customers(id),
    foreign key (barber_id) references barbers(id)
);

create table if not exists list_of_works(
    id int primary key auto_increment,
    record_id int not null,
    service_id int not null,
    foreign key (record_id) references records(id),
    foreign key (service_id) references services(id)
);




