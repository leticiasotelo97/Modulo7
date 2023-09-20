CREATE TABLE users(
	nombre VARCHAR(50) NOT NULL,
	edad INT,
	email VARCHAR(50) UNIQUE,
	id_usuario SERIAL NOT NULL,
	PRIMARY KEY (id_usuario)
);

INSERT INTO users(nombre,edad)
   VALUES(
	   'Juanita',
	   27
   );
   --Siempre correr este comando para ver tabla
   SELECT * FROM users;
   
   DROP TABLE users;
   
   DELETE FROM users WHERE id_usuario = 2