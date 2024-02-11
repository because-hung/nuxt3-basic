## 筆記 - L3 NuxtLink + Router

# 1. 可以直接用外部網址，但是 NuxtLink 在某些情況下可能無法檢測到連結是外部網址，因此您可以使用 external 標明這是外部網址
#    像是 <NuxtLink to="https://www.google.com/" external>

# 2. useRoute 針對網址有關的所有參數資訊做操作 useRouter 提供許多函式讓你操作網址像是push、replace、go等方法

# 3. 動態路由要用中括號的方式命名，像是 [id].vue