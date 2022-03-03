import * as tf from '@tensorflow/tfjs';

//Load the model
const model = await tf.loadGraphModel('@/models/model.json')

//Define the label
_LABELS = ['Escabeche de pescado', 'Tallarines con pollo', 'Causa de atun', 'Sopa de verduras', 'Papa a la huancaina',
'Sopa de semola', 'Pollo al sillao', 'Seco a la nortena', 'Estofado de carne', 'Crema de rocoto', 'Chanfainita', 'Papa rellena',
'Seco de res', 'Milanesa de carne', 'Estofado de pollo', 'Adobo de pescado', 'Aguadito de pollo', 'Pollo al horno', 'Sopa de paico',
'Olluquito con carne', 'Ocopa', 'Bistec con papas', 'Sopa de moron', 'Sopa a la minuta', 'Arroz a la jardinera',
'Arroz con chancho', 'Seco de pollo', 'Sancochado', 'Arroz con pollo', 'Pure de papas', 'Patasca', 'Ensalada rusa',
'Sopa menestron', 'Causa rellena', 'Tacu tacu', 'Sopa de lentejas', 'Lomo saltado', 'Tallarines verdes', 'Cau cau',
'Arverjitas partidas', 'Olluquito con pollo', 'Locro de zapallo', 'Chicharron de chancho', 'Bistec a lo pobre',
'Sopa criolla', 'Caldo de cordero', 'Menestron rojo', 'Ceviche de pollo', 'Caldo de gallina','Tiradito de pescado',
'Aji de gallina','Arroz chaufa', 'Guiso de lentejas']




