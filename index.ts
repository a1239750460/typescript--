// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
let ad: string | number | boolean = '123';
ad = true;
const appDiv1: HTMLElement = document.getElementById('app1');
appDiv1.innerHTML = `<h1>${ad}</h1>`;

interface user {
  readonly id: number;
  name: string;
  age?: number;
  sex: number;
}

class Student {
  fullName: string;
  //在构造函数的参数上使用public等同于创建了同名的成员变量。
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
  public test(): void {
    alert(`this.fullName:${this.fullName}`);
    alert(`this.firstName:${this.firstName}`);
    alert(`this.middleInitial:${this.middleInitial}`);
    alert(`this.lastName:${this.lastName}`);
  }
  /**
   * json序列化展示
   * @param json 要序列化展示json
   * @returns string
   */
  public syntaxHighlight(
    json: string | object,
    color: string = 'green'
  ): string {
    if (typeof json != 'string') {
      json = JSON.stringify(json, undefined, 2); //返回要JSON化的对象，2是spacing
    }
    json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
    return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      function (match: string) {
        var cls = 'number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key';
          } else {
            cls = 'string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean';
        } else if (/null/.test(match)) {
          cls = 'null';
        }
        return `<span style="color: ${color};">` + match + '</span>';
      }
    );
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = new Student('Jane', 'M.', 'User');
const appDiv2: HTMLElement = document.getElementById('app2');
appDiv2.innerHTML = `<h1>${greeter(user)}</h1>`;

const appDiv3: HTMLElement = document.getElementById('app3');
appDiv3.innerHTML = `<h1>${JSON.stringify(user)}</h1>`;

const appDiv4: HTMLElement = document.getElementById('app4');
appDiv4.innerHTML = `<pre>${user.syntaxHighlight(
  user,
  'rgb(0, 89, 255)'
)}</pre>`;
//user.test();
