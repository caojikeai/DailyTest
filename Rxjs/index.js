// import {Observable} from "rxjs";
// const fetch = require('node-fetch')
const axios = require('axios')
const Rx = require('rxjs')

const subscriber =  async (observer) => {
    let request = await axios.get('http://192.168.1.251:7300/mock/5ed2370df42d2d0026e987ab/example/fish',{})
    observer.next(request.data.fish1)
    observer.next(request.data.fish2)
    observer.next(request.data.fish3)

    observer.complete()
}

const observer = {
    next: (value) => {
        console.log(`I found ${value}`)
    },
    error:(err) => {
        console.log(`Error ${err}`)
    },
    complete: () =>{
        console.log('finished')
    }
}

const source = Rx.Observable.create(subscriber)
// Rx.Observable.interval(1000)
let subscription = source.subscribe(observer)

setTimeout(() => {
    subscription.unsubscribe()
    console.log('取消订阅了')
},5000)
