<template lang="">
    <div class="card">
        <form @submit.prevent="submit">
            <div >
      <span class="p-float-label">
        <InputText id="cedula" v-model="usuario.nombres" type="text" :class="{ 'p-invalid': errorMessageCedula }"
          aria-describedby="text-error" />
        <label for="nombres">Nombres</label>
      </span>
      <small class="p-error" id="text-error">{{
        errorMessageCedula || "&nbsp;"
      }}</small>

      <span class="p-float-label">
        <InputText id="password" v-model="usuario.apellidos" type="text" :class="{ 'p-invalid': errorMessagePassword }"
          aria-describedby="text-error" />
        <label for="apellidos">Apellido</label>
      </span>
      <small class="p-error" id="text-error-pass">{{
        errorMessagePassword || "&nbsp;"
      }}</small>
      <span class="p-float-label">
        <InputText id="password" v-model="usuario.direccion" type="text" :class="{ 'p-invalid': errorMessagePassword }"
          aria-describedby="text-error" />
        <label for="apellidos">direccion</label>
      </span>
      <small class="p-error" id="text-error-pass">{{
        errorMessagePassword || "&nbsp;"
      }}</small>
      <span class="p-float-label">
        <InputText id="password" v-model="usuario.ciudad" type="text" :class="{ 'p-invalid': errorMessagePassword }"
          aria-describedby="text-error" />
        <label for="apellidos">ciudad</label>
      </span>
      <small class="p-error" id="text-error-pass">{{
        errorMessagePassword || "&nbsp;"
      }}</small>
      <span class="p-float-label">
        <InputText id="password" v-model="usuario.email" type="text" :class="{ 'p-invalid': errorMessagePassword }"
          aria-describedby="text-error" />
        <label for="apellidos">email</label>
      </span>   
      <small class="p-error" id="text-error-pass">{{
        errorMessagePassword || "&nbsp;"
      }}</small>   
      <span class="p-float-label">
        <InputText id="password" v-model="usuario.fechaNacimiento" type="text" :class="{ 'p-invalid': errorMessagePassword }"
          aria-describedby="text-error" />
        <label for="apellidos">fechaNacimiento</label>
      </span>
      <small class="p-error" id="text-error-pass">{{
        errorMessagePassword || "&nbsp;"
      }}</small>
      <span class="p-float-label">
        <InputText id="password" v-model="usuario.sexo" type="text" :class="{ 'p-invalid': errorMessagePassword }"
          aria-describedby="text-error" />
        <label for="apellidos">sexo</label>
      </span>
      <small class="p-error" id="text-error-pass">{{
        errorMessagePassword || "&nbsp;"
      }}</small>

                      </div>

      <div>
        <Button type="submit" label="Crear" :loading="loading" icon="pi pi-user" class="w-full" />
      </div>
    </form>
        
    </div>
</template>
<script>
import { registroUsuario } from '../helpers/createUsuario';
export default {
    data() {
        return {
            usuarios: null,
            loading: false,
            errorMessageCedula: null,
            errorMessagePassword: null,
            usuario: {
                nombres: '',
                apellidos: '',
                direccion: '',
                ciudad: '',
                email: '',
                fechaNacimiento: new Date(),
                sexo: '',
                password: '',
                estado:true,
                roleId:5
            }
        }
    },
    methods: {
        async submit() {
            this.loading = true;
            await registroUsuario(this.usuario).then(usuario => {
                this.$emit('usuarioInsertado', usuario)
                this.loading = false;
            })
        }
    },
    mounted() {
    }
}
</script>
<style lang="">

</style>../helpers/getUsuario