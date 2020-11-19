import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const materialSchema = new Schema({
  titulo_o: {type: String, required: [true, 'Nombre obligatorio']},
  titulo_esp: String,
  titulo_comercial: String,
  duracion:String,
  temporada: String,
  numero_capitulos: String,
  tipo_material: String,
  tipo_contenido: String,
  centro_costo: String,
  genero_material: String,
  clasificacion: String,
  canal_transmi: Boolean
});

// Convertir a modelo
const Material = mongoose.model('Material', materialSchema);

export default Material;