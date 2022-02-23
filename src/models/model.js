import * as tf from '@tensorflow/tfjs';

const model = await tf.loadGraphModel('@/models/model.json')

