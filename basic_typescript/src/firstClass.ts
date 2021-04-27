const a ="1";
// console.log('aaa', a);


let hello: string = 'world';


const getFullName = (name: string, lastName: string): string => {
    return `${name} ${lastName}`;

}

// console.log(getFullName('builder', 'bob'));

type ID = number;
type PopularTag = string;
type MaybePopularTapg = PopularTag | null;

interface UserInterface {
    id: ID,
    name: string,
    age?: number,
    getMessage(): string
}

const user: UserInterface = {
    id: 1,
    name: 'builder',
    age: 7,
    getMessage() {
        return `Hello ${this.name}`
    }
}

const user2: UserInterface = {
    id: 2,
    name: 'Oded',
    getMessage() {
        return `Alright Alright: ${this.name}`
    }
}


const popularTag: PopularTag[] = ['read', 'write',]

const readTag: MaybePopularTapg  = 'books'

let userName: string = 'oded';
let pageName: string | number = '1';


let errMessage: string | null = null;
let newUser: UserInterface | null = null


// void / any / never / unknown

const doSomething = (): void => {
    console.log('something');
}

//never
const neverDoSomething = (): never => {
    throw('something');
}

let variableAny: any = 3;
let variableUnknown: unknown = 3;

let s1: string = variableAny;
let s2: string = variableUnknown as string;

let pageNumber: string = '1';
let numericPageNumber: number = pageNumber as unknown as number;



// working with the DOM

// const someElement = document.querySelector('.foo') as HTMLInputElement;

// console.log('someElement',someElement.value)

// const anotherElement = document.querySelector('.bar');
// anotherElement.addEventListener('blur', (event) => {
    // const target = event.target as HTMLInputElement;
    // console.log('event: ', target.value);
// });


// working with classes
// everything is public by default
// protected
// readyOnly


interface PersonInterface {
    getFullName(): string
}

class Person implements PersonInterface {
    protected name: string;
    private lastName: string;
    readonly unchangeableName: string;
    static readonly maxAge = 120;

    constructor(name: string, lastName: string) {
        this.name = name;
        this.lastName = lastName;
        this.unchangeableName = name;
    }


    changeUnchangeableName(): void {
        // this.unchangeableName = 'foo'
    }

    getFullName(): string {
        return `${this.name} ${this.lastName}`;
    }
};

const spongeBob = new Person('sponge', 'bob');

// console.log(spongeBob.getFullName())
// console.log(spongeBob);


// inheritence

class Programmer extends Person {
    private languages: string;

    setLanguages(languages: string): void {
        this.languages = languages;
    }

    getLanguages(): string {
        return this.languages;
    }
}

const bill = new Programmer('Bill', 'Gates');
// console.log(bill.getFullName());
// console.log(bill)



interface HobitInterface<T> {
    name: string;
    data: T;
};

const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id
    };
};


const hobit: HobitInterface = {
    name: 'Frodo'
};

const hobitWithId = addId<HobitInterface>(hobit);
// const stringWithId = addId<string>('Foo')
console.log(hobitWithId);