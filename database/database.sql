create database dogshelter;
use dogshelter;

create table dog(             			
    dog_id int auto_increment,			
	dog_name varchar(30) NOT NULL,
	breed varchar(30) NOT NULL,
	birthday date NOT NULL,
	sex enum('Male', 'Female') NOT NULL,
	weight decimal(5,2) NOT NULL,
	color varchar(64) NOT NULL,
	marks varchar(128) DEFAULT 'None',
	aggressive enum('Yes', 'No') default 'No',
	trained enum('Yes', 'No') default 'No',
	status enum('Recuperating', 'Died in Care', 'Adopted', 'Euthanized', 'Transferred', 'Healthy') default 'Recuperating',
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	description text NOT NULL,
	created datetime DEFAULT now(),
	updated datetime,
	deleted datetime, 
	
	constraint pk_dog primary key(dog_id)
);

create table dog_image(		
	dog_image_id int auto_increment,
	dog_id int NOT NULL,
	image blob NOT NULL, 
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created datetime DEFAULT now(),
	deleted datetime,

	constraint pk_dog_image_id primary key(dog_image_id),
	constraint fk_dog_id foreign key(dog_id) references dog(dog_id)
);

create table person (
	person_id int auto_increment,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	middle_initial char(1) NOT NULL,
	contact_number varchar(11) NOT NULL,
	email_address varchar(128) NOT NULL,
	address1 varchar(256) NOT NULL,
	address2 varchar(256),
	city varchar(50) NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created datetime DEFAULT now(),
	updated datetime,
	deleted datetime, 
	
	constraint pk_person_id primary key(person_id)
);

create table person_image(
	person_image_id int auto_increment,
	person_id int,
	image blob not null,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created DATETIME DEFAULT now(),
	deleted DATETIME,

	constraint pk_person_image primary key(person_image_id),
	constraint fk_person_image foreign key(person_id) references person(person_id)
);

create table users(
	user_id int auto_increment,
	person_id int NOT NULL,
	user_type enum('Admin', 'Manager', 'Staff', 'Volunteer') DEFAULT 'Admin', 
	email varchar(128) not null,
	password varchar(256) NOT NULL,
	image blob,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created datetime DEFAULT now(),
	updated datetime,
	deleted datetime,
	
	constraint pk_users primary key(user_id),
	constraint fk_users foreign key(person_id) references person(person_id)
);

create table clinic (
	clinic_id int auto_increment,
	name varchar(128) NOT NULL,
	address1 varchar(256) NOT NULL,
	address2 varchar(256),
	city varchar(50) NOT NULL,
	province varchar(50) NOT NULL,
	contact_number varchar(11) NOT NULL,
	email_address varchar(50) NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created datetime DEFAULT now(),	
	updated datetime,
	deleted datetime, 
	
	constraint pk_clinic primary key(clinic_id)
);

create table veterinarian (
	vet_id int auto_increment,
	clinic_id int,
	name varchar(128) NOT NULL,
	contact_number varchar(11) NOT NULL,
	email_address varchar(50) NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created datetime DEFAULT now(),
	deleted datetime, 
	
	constraint pk_vet primary key(vet_id),
	constraint fk_vet foreign key(clinic_id) references clinic(clinic_id)
);


create table medical_record(
	medical_id int auto_increment,
	dog_id int NOT NULL,
	clinic_id int NOT NULL,
	vet_id int NOT NULL,
	description text NOT NULL,
	diagnosis text NOT NULL,
	test_performed text NOT NULL,
	action text NOT NULL,
	medications text NOT NULL,
	comment text NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created datetime DEFAULT now(),
	deleted datetime, 

	constraint pk_medical_record primary key(medical_id),
	constraint fk1_medical_record foreign key(dog_id) references dog(dog_id),
	constraint fk2_medical_record foreign key(clinic_id) references clinic(clinic_id),
	constraint fk3_medical_record foreign key(vet_id) references veterinarian(vet_id)	
);

create table vaccination(
	vaccination_id int auto_increment,
	dog_id int,
	clinic_id int,
	vet_id int,
	vaccine_name varchar(128),
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created DATETIME DEFAULT now(),
	deleted DATETIME,
	
	constraint pk_vaccination primary key(vaccination_id),
	constraint fk1_vaccination foreign key(dog_id) references dog(dog_id),
	constraint fk2_vaccination foreign key(clinic_id) references clinic(clinic_id),
	constraint fk3_vaccination foreign key(vet_id) references veterinarian(vet_id)
);

create table intake(
	intake_id int auto_increment,
	dog_id int NOT NULL,
	intakeable_id int,
	intakeable_type enum('Transferee', 'Surrendered', 'Rescued'),
	health_condition text not null,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created datetime DEFAULT now(),
	deleted datetime,

	constraint pk_intake_id primary key(intake_id),
	constraint fk1_intake_id foreign key(dog_id) references dog(dog_id)
);


create table transferee_intake(
	transferee_id int auto_increment,
	shelter_name varchar(128) not null,
	address1 varchar(256) NOT NULL,
	address2 varchar(256),
	city varchar(50) NOT NULL,
	province varchar(50) NOT NULL,
	contact_number varchar(11) NOT NULL,
	email_address varchar(50) NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created DATETIME DEFAULT now(),
	deleted DATETIME,

	constraint pk_transferee primary key(transferee_id)
);

create table surrendered_intake(
	surrendered_id int auto_increment,
	person_id int,
	reason_of_surrender text not null,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created DATETIME DEFAULT now(),
	deleted DATETIME,

	constraint pk_surrendered primary key(surrendered_id),
	constraint fk_surrendered foreign key(person_id) references person(person_id)
);

create table rescued_intake(
	rescued_id int auto_increment,
	address1 varchar(256) NOT NULL,
	address2 varchar(256),
	city varchar(50) NOT NULL,
	province varchar(50) NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created DATETIME DEFAULT now(),
	deleted DATETIME,

	constraint pk_rescued primary key(rescued_id)
);

create table outtake(
	outtake_id int auto_increment,
	dog_id int,
	outtakeable_id int,
	outtakeable_type enum('Transferred', 'Adopted') NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created datetime DEFAULT now(),
	deleted datetime,

	constraint pk_outtake_id primary key(outtake_id),
	constraint fk1_outtake_id foreign key(dog_id) references dog(dog_id)
);

create table transferred_outtake(
	transferred_id int auto_increment,
	shelter_name varchar(128) not null,
	address1 varchar(256) NOT NULL,
	address2 varchar(256),
	city varchar(50) NOT NULL,
	province varchar(50) NOT NULL,
	contact_number varchar(11) NOT NULL,
	email_address varchar(50) NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created DATETIME DEFAULT now(),
	deleted DATETIME,

	constraint pk_transferred primary key(transferred_id)
);

create table adopted_outtake(
	adopted_id int auto_increment,
	person_id int,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created DATETIME DEFAULT now(),
	deleted DATETIME,

	constraint pk_adopted_id primary key(adopted_id),
	constraint fk_adopted_id foreign key(person_id) references person(person_id)
);


create table action(
	action_id int auto_increment,
	user_id int,
	actionable_id int not null,
	actionable_type enum('Created', 'Updated', 'Deleted') not null,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created DATETIME DEFAULT now(),
	deleted DATETIME,

	constraint pk_action primary key (action_id),
	constraint fk_action foreign key(user_id) references users(user_id)
);

