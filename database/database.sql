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
	aggressive enum('Yes', 'No') DEFAULT 'No',
	trained enum('Yes', 'No') DEFAULT 'No',
	status enum('Recuperating', 'Died in Care', 'Adopted', 'Euthanized', 'Transferred', 'Healthy') DEFAULT 'Recuperating',
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

	constraint pk_dog_image primary key(dog_image_id),
	constraint fk_dog foreign key(dog_id) references dog(dog_id)
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
	
	constraint pk_person primary key(person_id)
);

create table users(
	users_id int auto_increment,
	person_id int NOT NULL,
	user_type enum('Admin', 'Manager', 'Staff', 'Volunteer') DEFAULT 'Admin', 
	password varchar(256) NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created datetime DEFAULT now(),
	updated datetime,
	deleted datetime,
	
	constraint pk_user primary key(users_id),
	constraint fk_user foreign key(person_id) references person(person_id)
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
	person_id int NOT NULL,
	clinic_id int,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created datetime DEFAULT now(),
	deleted datetime, 
	
	constraint pk_vet primary key(vet_id),
	constraint fk1_vet foreign key(clinic_id) references clinic(clinic_id),
	constraint fk2_vet foreign key(person_id) references person(person_id)
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

	constraint pk_medical primary key(medical_id),
	constraint fk1_medical foreign key(dog_id) references dog(dog_id),
	constraint fk2_medical foreign key(clinic_id) references clinic(clinic_id),
	constraint fk3_medical foreign key(vet_id) references veterinarian(vet_id)	
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
	intakeable_type enum('Transferee', 'Surrendered', 'Rescued'),
	health_condition text NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created datetime DEFAULT now(),
	deleted datetime,

	constraint pk_intake primary key(intake_id),
	constraint fk1_intake foreign key(dog_id) references dog(dog_id)
);


create table transferee_intake(
	transferee_id int auto_increment,
	intake_id int NOT NULL,
	shelter_name varchar(128) NOT NULL,
	address1 varchar(256) NOT NULL,
	address2 varchar(256),
	city varchar(50) NOT NULL,
	province varchar(50) NOT NULL,
	contact_number varchar(11) NOT NULL,
	email_address varchar(50) NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created DATETIME DEFAULT now(),
	deleted DATETIME,

	constraint pk_transferee_intake primary key(transferee_id),
	constraint fk_transferee_intake foreign key(intake_id) references intake(intake_id)
);

create table surrendered_intake(
	surrendered_id int auto_increment,
	person_id int NOT NULL,
	intake_id int NOT NULL,
	reason_of_surrender text NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created DATETIME DEFAULT now(),
	deleted DATETIME,

	constraint pk_surrendered_intake primary key(surrendered_id),
	constraint fk1_surrendered_intake foreign key(person_id) references person(person_id),
	constraint fk2_surrendered_intake foreign key(intake_id) references intake(intake_id)
);

create table rescued_intake(
	rescued_id int auto_increment,
	intake_id int NOT NULL,
	address1 varchar(256) NOT NULL,
	address2 varchar(256),
	city varchar(50) NOT NULL,
	province varchar(50) NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created DATETIME DEFAULT now(),
	deleted DATETIME,

	constraint pk_rescued_intake primary key(rescued_id),
	constraint fk_rescued_intake foreign key(intake_id) references intake(intake_id)
);

create table outtake(
	outtake_id int auto_increment,
	dog_id int,
	outtakeable_type enum('Transferred', 'Adopted') NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created datetime DEFAULT now(),
	deleted datetime,

	constraint pk_outtake primary key(outtake_id),
	constraint fk_outtake foreign key(dog_id) references dog(dog_id)
);

create table transferred_outtake(
	transferred_id int auto_increment,
	outtake_id int NOT NULL,
	shelter_name varchar(128) NOT NULL,
	address1 varchar(256) NOT NULL,
	address2 varchar(256),
	city varchar(50) NOT NULL,
	province varchar(50) NOT NULL,
	contact_number varchar(11) NOT NULL,
	email_address varchar(50) NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created DATETIME DEFAULT now(),
	deleted DATETIME,

	constraint pk_transferred_outtake primary key(transferred_id),
	constraint fk_transferred_outtake foreign key(outtake_id) references outtake(outtake_id)
);

create table adopted_outtake(
	adopted_id int auto_increment,
	person_id int NOT NULL,
	outtake_id int NOT NULL,
	table_status enum('Active', 'Deleted') DEFAULT 'Active',
	created DATETIME DEFAULT now(),
	deleted DATETIME,

	constraint pk_adopted primary key(adopted_id),
	constraint fk1_adopted foreign key(person_id) references person(person_id),
	constraint fk2_adopted foreign key(outtake_id) references outtake(outtake_id)
);

create table application(
	application_id int auto_increment,
	application_type enum('Adoption', 'Surrender', 'Volunteer', 'Transfer') NOT NULL,
	person_id int NOT NULL,
	dog_id int,
	comment text NOT NULL,
	application_form blob NOT NULL,
	date_received DATETIME DEFAULT now(),

	constraint pk_application primary key(application_id),
	constraint fk1_application foreign key(person_id) references person(person_id),
	constraint fk2_application foreign key(dog_id) references dog(dog_id)
);

create table action(
	action_id int auto_increment,
	users_id int NOT NULL,
	table_id int NOT NULL,
	table_name varchar(50) NOT NULL,
	action_type enum('Created', 'Updated', 'Deleted') NOT NULL,
	created DATETIME DEFAULT now(),

	constraint pk_action primary key(action_id),
	constraint fk_action foreign key(users_id) references users(users_id)
);

