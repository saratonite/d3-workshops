import * as d3 from 'd3';
import { json } from 'd3-request';

//TODO : Since d3.json('path') does'nt wor with parcel js , i'm using d3-request loader

d3.json('data/data.json', (data) => {

    console.log(data)

    const extent = d3.extent(data, (d) => {
        return d.age;
    })

    console.log(extent);

    // Linear Scale

    const scale = d3.scaleLinear()
            .domain(extent)
            .range([0,600])

    console.log(scale(37))

    // D3 Set
    const ages =  d3.set(data, (d) => {
        return d.age;
    }) 

    console.log(ages.values());


})

