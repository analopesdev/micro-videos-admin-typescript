import { Category } from '../category.entity'

describe('Category Unit Test', () => {
  test('should create a category', () => {
    const category = Category.create({
      name: 'any_name',
      description: 'any_description',
      is_active: true,
    })

    expect(category.name).toBe('any_name')
    expect(category.description).toBe('any_description')
    expect(category.is_active).toBe(true)
    expect(category.created_at).toBeInstanceOf(Date)
  })

  test('should change name', () => {
    const category = Category.create({
      name: 'any_name',
      description: 'any_description',
      is_active: true,
    })

    category.changeName('new_name')

    expect(category.name).toBe('new_name')
  })

  test('should change description', () => {
    const category = Category.create({
      name: 'any_name',
      description: 'any_description',
      is_active: true,
    })

    category.changeDescription('new_description')

    expect(category.description).toBe('new_description')
  })

  test('should activate category', () => {
    const category = Category.create({
      name: 'any_name',
      description: 'any_description',
      is_active: false,
    })

    category.activate()

    expect(category.is_active).toBe(true)
  })

  test('should deactivate category', () => {
    const category = Category.create({
      name: 'any_name',
      description: 'any_description',
      is_active: true,
    })

    category.deactivate()

    expect(category.is_active).toBe(false)
  })
})
