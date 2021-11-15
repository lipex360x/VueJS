import express from 'express'
import cors from 'cors'
import { v4 as uuid } from 'uuid'

const app = express()

app.use(express.json())
app.use(cors())

interface IUserProps {
  id: string
  name: string
  email: string
}

const users:IUserProps[] = []

app.get('/users', (request, response) => {
  return response.json(users)
})

app.post('/users', (request, response) => {
  const { name, email } = request.body
  
  const id = uuid()

  const user = { id, name, email }
  users.push(user)

  return response.json(user)
})

app.put('/users/:id', (request, response) => {
  const { id } = request.params

  const { name, email } = request.body

  const userIndex = users.findIndex((user) => user.id === id)
  
  if( userIndex < 0) return response.status(401).json({ message: 'User not found' })

  users[userIndex] = { id, name, email }

  return response.status(201).json(users[userIndex])
})

app.delete('/users/:id', (request, response) => {
  const { id } = request.params

  const userIndex = users.findIndex((user) => user.id === id)
  
  if( userIndex < 0) return response.status(401).json({ message: 'User not found' })

  const user = users[userIndex]

  users.splice(userIndex, 1)

  return response.status(202).json(user)
})

app.listen('3333', () => { console.log('api started')})