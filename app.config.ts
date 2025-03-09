export default defineAppConfig({
ui:{
  card:{
      base: '',
      background: 'bg-white dark:bg-gray-900',
      divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
      rounded: 'rounded-lg',
      shadow: 'shadow-md',
      body: {
        base: '',
        background: '',
        padding: 'px-4 py-5 sm:p-6'
      },
      header: {
        base: '',
        background: '',
        padding: 'px-1 py-3 sm:px-6'
      },
      footer: {
        base: '',
        background: '',
        display: 'flex-col',
        items: 'items-end',
        justify: 'flex-end',
        padding: 'px-3 py-3 sm:px-6'
    }
  }
}
})