var form = document.querySelector('#in-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    document.querySelector('.heading-result').classList.add('show');

    var input = {};
    for (var i = 0; i < form.elements.length - 1; i++) {
        input[form.elements.item(i).name] = form.elements.item(i).value;
    }

    var target = input.target;
    var population_size = input.population_size;
    var mutation_rate = input.mutation_rate;

    function countFitness(target, gen) {
        var match = 0;
        for (var i in gen) {
            if (target[i] == gen[i]) {
                match++;
            }
        }
        return Math.round(match / target.length * 10000000) / 100000;
    }

    function minIndex(population) {
        var temp = population.map(function (item) {
            return item.fitness;
        });
        var min = Math.min.apply(Math, temp);
        return temp.indexOf(min);
    }

    var population = [];
    for (var i = 0; i < population_size; i++) {
        var random_string = '';
        for (var j in target) {
            random_string += String.fromCharCode(Math.random() * (127 - 32) + 32);
        }

        population[i] = {
            gen: random_string,
            fitness: countFitness(target, random_string)
        };
    }

    var generation = 0;
    var algorithm = setInterval(function () {
        generation++;

        var sorted = population.sort(function (a, b) {
            return b.fitness - a.fitness;
        });

        var parent1 = sorted[0].gen;
        var parent2 = sorted[1].gen;

        var crossover_point = Math.floor(target.length / 2);

        var child1 = parent1.substring(0, crossover_point) + parent2.substring(crossover_point);
        var child2 = parent2.substring(0, crossover_point) + parent1.substring(crossover_point);

        var mutant1 = child1;
        var mutant2 = child2;

        for (var j = 0; j < target.length; j++) {
            if (Math.random() <= mutation_rate) {
                mutant1 = mutant1.substring(0, j) + String.fromCharCode(Math.random() * (127 - 32) + 32) + mutant1.substring(j + 1);
                mutant2 = mutant2.substring(0, j) + String.fromCharCode(Math.random() * (127 - 32) + 32) + mutant2.substring(j + 1);
            }
        }

        sorted[minIndex(sorted)] = {
            gen: mutant1,
            fitness: countFitness(target, mutant1)
        }

        sorted[minIndex(sorted)] = {
            gen: mutant2,
            fitness: countFitness(target, mutant2)
        }
        
        population = sorted;

        // if (generation == 1) {
        if (population[0].gen == target) {
            clearInterval(algorithm)
        }

        var tbody = document.createElement('tbody');
        for (var i in population) {
            var noTd = document.createElement('td');
            noTd.innerHTML = Number(i) + 1;

            var genTd = document.createElement('td');
            genTd.innerHTML = population[i].gen;

            var fitnessTd = document.createElement('td');
            fitnessTd.innerHTML = population[i].fitness;

            var tr = document.createElement('tr');
            tr.appendChild(noTd);
            tr.appendChild(genTd);
            tr.appendChild(fitnessTd);

            tbody.appendChild(tr);
        }

        document.querySelector('#generation').innerHTML = 'generation : ' + generation;
        document.querySelector('#out-table tbody').replaceWith(tbody);
    }, 1);
});

// if ('serviceWorker' in navigator) {
//     addEventListener('load', function () {
//         navigator.serviceWorker.register('sw.js').then(function (r) {
//             console.log('ServiceWorker registration successfull with scope: ', r.scope);
//         }, function (e) {
//             console.log('ServiceWorker registration failed: ', e);
//         });
//     });
// }