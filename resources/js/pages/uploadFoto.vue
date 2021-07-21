<template>
    <div>

        <h3>Upload Foto</h3>
        <img :src="previewimage" style="width: 300px">
        <div class="input-group">
            <input type="file" name="photo" @change="upload">
        </div>
        <button @click="submit">upload</button>
    </div>
</template>
<script>
export default {
    props: ['id'],
    data(){
        return{
            previewimage: null,
            photo: null
        }
    },
    methods: {
        upload(e){
            let files = e.target.files[0]
            this.previewimage = URL.createObjectURL(files)
            this.photo = files
        },
        submit(){
            let formData = new FormData()
            formData.append('photo', this.photo)

            axios.post('/api/users/photo/'+this.id, formData)
            .then(response => {
                if(response.data.status){
                    this.$noty.success(response.data.message)
                    this.$router.push({
                        name:'Profile',
                        params: {
                            id: this.id
                        }
                    })
                }
            })
        }
    }
}
</script>