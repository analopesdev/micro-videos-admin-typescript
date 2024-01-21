import { Uuid } from '../../../shared/domain/value-objects/uuid.vo'
import { Category } from '../category.entity'

describe('Category Unit Test', () => {
  test('should create a category with default value', () => {
    const category = new Category({
      name: 'any_name',
    })

    expect(category.category_id).toBeInstanceOf(Uuid)
    expect(category.name).toBe('any_name')
    expect(category.description).toBe(null)
    expect(category.is_active).toBe(true)
    expect(category.created_at).toBeInstanceOf(Date)
  })

  test('should change name', () => {
    const category = new Category({
      name: 'any_name',
      description: 'any_description',
      is_active: true,
    })

    category.changeName('new_name')

    expect(category.name).toBe('new_name')
  })

  test('should create a category with custom values', () => {
    const category = new Category({
      name: 'any_name',
      description: 'any_description',
      is_active: false,
    })

    expect(category.category_id).toBeInstanceOf(Uuid)
    expect(category.name).toBe('any_name')
    expect(category.description).toBe('any_description')
    expect(category.is_active).toBe(false)
    expect(category.created_at).toBeInstanceOf(Date)
  })

  test('should create a category with name and description', () => {
    const category = new Category({
      name: 'any_name',
      description: 'any_description',
    })

    expect(category.category_id).toBeInstanceOf(Uuid)
    expect(category.name).toBe('any_name')
    expect(category.description).toBe('any_description')
    expect(category.is_active).toBe(true)
    expect(category.created_at).toBeInstanceOf(Date)
  })

  test('should change description', () => {
    const category = new Category({
      name: 'any_name',
      description: 'any_description',
      is_active: true,
    })

    category.changeDescription('new_description')

    expect(category.description).toBe('new_description')
  })

  test('should activate category', () => {
    const category = new Category({
      name: 'any_name',
      is_active: false,
    })

    category.activate()

    expect(category.is_active).toBe(true)
  })

  test('should deactivate category', () => {
    const category = new Category({
      name: 'any_name',
      description: 'any_description',
      is_active: true,
    })

    category.deactivate()

    expect(category.is_active).toBe(false)
  })

  describe('category_id field', () => {
    const arrange = [
      { category_id: null },
      { category_id: undefined },
      { category_id: new Uuid() },
    ]

    arrange.forEach(arr => {
      test.each(arrange)('id = %j', ({ category_id }) => {
        const category = new Category({
          name: 'any_name',
          category_id: category_id as any,
        })

        expect(category.category_id).toBeInstanceOf(Uuid)
      })
    })
  })
})
