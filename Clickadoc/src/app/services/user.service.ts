import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username: String = 'Constantinos'
  pastActivity: Array<any> = [
    { doctor: 'John', date: '03/04/2020', notes: 'Notes for the 1st meeting, bla bla bla'}, 
    { doctor: 'John', date: '22/03/2020', notes: 'These are the notes for the 2nd meeting'}, 
    { doctor: 'John', date: '13/03/2020', notes: 'bla bla bla bla bla blabla bla blabla bla bla'}, 
    { doctor: 'John', date: '27/02/2020', notes: 'bla bla blabla bla blabla bla bla dsdfdsf'}, 
    { doctor: 'John', date: '02/02/2020', notes: 'bla bla blabla bla blabla bla bladsfdsfdsfdsfdsf'}, 
  ]

  pastNotes: Array<any> = [
    {text: 'Registration form', date: '03/04/2020', image: 'https://i.pinimg.com/originals/f7/af/84/f7af847272e17fc3a2777324d6478ea5.png'},
    {text: 'Questionnaire about syptoms', date: '23/04/2020', image: 'https://i.pinimg.com/originals/f7/af/84/f7af847272e17fc3a2777324d6478ea5.png'},
  ]

  constructor() { }

  
}
