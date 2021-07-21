<template>
    <div>
        <section v-if="id">
            <img v-if="detailUser.photo" :src="'/images/'+detailUser.photo" width="200px">
            <h1>Hello, {{detailUser.name}}</h1>
            <p>Email : <strong>{{detailUser.email}}</strong></p>
            <router-link :to="{name: 'User' }">Kembali</router-link>
            <router-link :to="{name: 'Upload', params: {id: detailUser.id }}">Upload</router-link>
            <a href="" @click.prevent="handlingDelete">Hapus</a>
            <a href="" @click.prevent="Edit">Edit</a>
        </section>
    </div>
</template>

<script>
export default {
    // property dari komponen user
    props: ['id'],
    data(){
        return{
            detailUser: {}
        }
    },
    mounted(){
        this.getUser()
    },
    methods: {
        getUser() {
            axios.get('/api/users/'+ this.id).then((response) => {
                console.log(response);
                this.detailUser = response.data;
            })
        },
        handlingDelete(){
            if(confirm('Apakah anda yakin menghapus data ini')){
                axios.delete('/api/users/' +this.id).then((response) => {
                    if(response.data.status){
                        console.log(response);
                        this.$noty.success(response.data.message)
                        this.$router.push({
                            name:'User'
                        })
                    }
                })
            }else{
                return false
            }
        },
        Edit(){
            this.$router.push({
                name: 'Edit',
                params: {
                    id : this.id
                }
            })
        }
    }
}
</script>
