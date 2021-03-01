doSomethingAsync = () => {
  return new Promise((resolve, reject)  =>  {
    (true) ? setTimeout(() => resolve('do something async'), 2000) : reject(new Error('test error'))
  })
}

const doSomething = async () => {
  const something = await doSomethingAsync()
  console.log(something)
}

const anotherFuction = async () => {
  try {
    const something = await doSomethingAsync()
    console.log(something)

  } catch {console.error}
}

doSomething()
anotherFuction()
