create database users;
use users;

drop table userDataTable;

create table userDataTable(
id int primary key AUTO_INCREMENT,
email text,
first text,
company text
);

insert into userDataTable values (1, 'allen.miler', 'Allen', 'infy');
insert into userDataTable values (2, 'musaib.ahmed', 'Musaib', 'infy');
insert into userDataTable values (3, 'nishma.khan', 'Nishma', 'infy');
insert into userDataTable values (4, 'amrit.budhatoki', 'Amrit', 'infy');

select * from userDataTable;

