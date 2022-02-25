CREATE SCHEMA inventory;

SET search_path TO inventory;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE CONVERSION_TYPE as ENUM ('division', 'multiplication');

CREATE TABLE IF NOT EXISTS measurement_units (
  id UUID DEFAULT uuid_generate_v4(),
  description VARCHAR(250) NOT NULL,  
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT uuid_generate_v4(),
  description VARCHAR(250) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS product_measurement_units (
  id UUID DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL,
  measurement_unit_id UUID NOT NULL,
  primary_unit BOOLEAN NOT NULL DEFAULT false,
  conversion_type CONVERSION_TYPE NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_products FOREIGN KEY(product_id) REFERENCES products(id),
  CONSTRAINT fk_measurement_units FOREIGN KEY(measurement_unit_id) REFERENCES measurement_units(id)
);
