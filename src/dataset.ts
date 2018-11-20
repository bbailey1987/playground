/* Copyright 2016 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
/**
 * A two dimensional example: x and y coordinates with the label.
 */
import * as _ from 'lodash';
import {Problem} from './state';

export type Example2D = {
  x: number,
  y: number,
  label: number
};

export enum ProblemType {
  Classification,
  Regression
}

interface Dataset {
  name: string;
  type: Problem;
  data: Example2D[];
}

export const ipfsDataset: Dataset[] = [];

/**
 * Shuffles the array using Fisher-Yates algorithm. Uses the seedrandom
 * library as the random generator.
 */
export function shuffle(array: any[]): void {
  let counter = array.length;
  let temp = 0;
  let index = 0;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
}

//export type DataGenerator = (numSamples: number, noise: number) => Example2D[];

export function getDataset(name: string): Dataset {
  return _.find(ipfsDataset, ['name', name]);
}