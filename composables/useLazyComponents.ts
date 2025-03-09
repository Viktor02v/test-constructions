import {ref, onMounted, onUnmounted} from "vue"

export function useLazyComponent(LazyComponent:string) {
  const container = ref<HTMLElement | null>(null);
  const showComponent = ref(false);
  let observer: IntersectionObserver | null = null;

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]
    if (entry.isIntersecting) {
      showComponent.value = true
      observer?.disconnect() 
    }
  }

  onMounted(() =>{
    if(container.value) {
      observer = new IntersectionObserver(handleIntersection,{
        root:null,
        threshold:0.2,
      })
      observer.observe(container.value)
    }
  })


  onUnmounted(() =>{
    observer?.disconnect() 
  })

return{
  container,
  showComponent,
  handleIntersection,
  LazyComponent,
}
}