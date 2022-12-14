import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBe(true);

    expect(true).toBeTrue(); // espera o valor literal
    expect(true).toBe(true); // tem que apontar para o mesmo endereço de memória
    expect(true).toBeTruthy(); // é mais genérico, então podemos testar instâncias, se valor o valor é true, etc..
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should not generate duplicate id when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    };

    expect(ids.size).toBe(50);
  })

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of generateIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2)
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should throw when called with empty`, () => {
      const emptyValues = [null, undefined, '', '0', '13'];
      emptyValues.forEach(emptyValue => {
        expect(() => service.generateUniqueIdWithPrefix(emptyValue)) // ao lançar o erro, precisamos passar o expect com uma arrow function
          .withContext(`Empty value: ${emptyValue}`) // ele cria um contexto para cada valor, ou seja se um falhar, ele diz qual criou a falha
          .toThrow()
      })
    })
});
