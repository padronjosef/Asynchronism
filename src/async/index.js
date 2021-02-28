doSomethingAsync = () => {
  return new Promise((resolve, reject)  =>  {
    (true)
      ? setTimeout(() => resolve('do something async'), 2000)
      : reject(new Error('test error'))
  })
}

const doSomething = async () => {
  const something = await doSomethingAsync()
  console.log(something)
}

console.log('before 1')
doSomething()
console.log('before 2')

const anotherFuction = async () => {
  try {
    const something = await doSomethingAsync()
    console.log(something)
  } catch (error) {
    console.error(error)
  }
}

console.log('before 3')
anotherFuction()
console.log('before 4')