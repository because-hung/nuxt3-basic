## 筆記 - L2 useFetch + useAsyncData

# 1. useFetch 支援 server 和 client 端 打 api 取得資料的功能

# 2. useFetch 的 interceptors , 如果有用到記得要將 onResponse 的 data 回傳 , 不然 data 會找不到資料

# 3. useAsyncData 需要帶 key 值，防止在 server 端和 client 端觸發兩次資料獲取，可帶可不帶，
#    不帶的話會為自動幫你生成一個對應檔案名和編號的唯一 key

# 4. useFetch = useAsyncData + $fetch
#    單純取資料 -> useFetch  需要針對 key 值或非同步程式做操作 -> useAsyncData

# 5. useAsyncData + axios
#    使用 axios 的話，一定最後要回傳的是只有它的 response data 的資料，
#    如果你把整個 axios.get 回傳的內容整包給 return 回去，會直接壞掉。