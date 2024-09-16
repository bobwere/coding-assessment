# Assessment Two

# Skia

<img width="400" alt="skia" src="https://user-images.githubusercontent.com/306134/146549218-b7959ad9-0107-4c1c-b439-b96c780f5230.png">

This program is used to identify the smallest possible difference between two price points within a list of products for distribution.

## Stack

This program is built using the following technologies:

-   Typescript
-   NodeJS


## Get Started (Installation)

To install this program, please follow these steps:

N/B make sure you have NODEJS installed on your local machine
[![Install NODEJS]](https://nodejs.org/en/download/package-manager/current)

1. Clone this repository to your local machine
2. Navigate to the root directory of the project
3. Run `npm install` to install the project dependencies.
4. Run `npm run dev` to start the development server.
5. This will produce result of the program into a file `fixtures/sample_output.txt` directory.


## Usage

To use this program, follow the steps below:

N/B This program depends on input file and an output file.

1. Create a new input file in the `fixtures` directory. The input file should be named `sample_input_4.txt`.
2. Edit `src/index.ts` change input file path to point to newly created file in this case `fixtures/sample_input_4.txt`
3. Ensure the input of the newly created file follows the following format

   Each Goodie has 2 pieces of info – Name and Price
   The first line contains the number of Employees. Say ‘n’. So there will be ’3n&#39; lines
   following as each job has 3 lines.
   Each of the next subsequent lines contains goodies in the following format:
   `name: price`

   Sample Input
   `
    Number of the employees: 4
    Fitbit Plus: 7980
    Microwave Oven: 9800
    Alexa: 9999
    Digital Camera: 11101
   `
2. Run `npm run dev` to start the development server.
3. The result of the program will be stored in `fixtures` directory. The output file will be named `sample_output.txt`.

## Testing

To test this program, follow the steps below:

1. Run `npm run test` to run the tests.

## Demo Screen Grab

[![Watch the video]](https://app.claap.io/raundtable/node-js-solution-for-secret-santa-coding-challenge-c-uiFsOR4TNz-rHiJUOLrJYFq)
