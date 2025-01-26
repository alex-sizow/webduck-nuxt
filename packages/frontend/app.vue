<template>
  <Suspense>
    <template #default>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style>
* {
  font-family: 'Courier New', Courier, monospace;
}
</style>
