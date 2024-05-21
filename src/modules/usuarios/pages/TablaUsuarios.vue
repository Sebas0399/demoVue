<template lang="">
            <Toast />

      <Dialog
      v-model:visible="visible"
      modal
      header="Nuevo Usuario"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
    <NuevoUsuario

      @usuarioInsertado="insertarUsuario"
    ></NuevoUsuario>
  </Dialog>

  <Dialog
      v-model:visible="visibleActualizar"
      modal
      header="Nueva"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
    <ActualizarUsuario
      
      @usuarioActualizar="actualizarUsuario"
      :id="idUsuario"
    ></ActualizarUsuario>
  </Dialog>

    <div class="card flex justify-content-center">
        <ContextMenu ref="cm" :model="menuModel" @hide="selectedUsuario = null" />

        <DataTable contextMenu v-model:contextMenuSelection="selectedUsuario"  @rowContextmenu="onRowContextMenu" :value="usuarios" paginator :rows="10" :rowsPerPageOptions="[10,20,50]" tableStyle="min-width: 50rem">
            <template #header>
        <div
          class="flex flex-wrap align-items-center justify-content-between gap-2"
        >

          <Button
            icon="pi pi-plus"
            @click="this.visible = true"
            
            rounded
            raised
          />
        </div>
      </template>

<Column field="nombres" header="Nombre" sortable filterable></Column>
<Column field="apellidos" header="Apellido" sortable filterable></Column>
<Column field="direccion" header="Email" sortable filterable></Column>
<Column field="ciudad" header="Ciudad" sortable filterable></Column>
<Column field="email" header="E-mail" sortable filterable></Column>
<Column field="fechaNacimiento" header="Fecha de Nacimiento" sornpm runtable filterable></Column>
<Column field="sexo" header="Sexo" sortable filterable></Column>
</DataTable>

</div>
</template>
<script>
import { getUsuariosFachada } from '../helpers/getUsuario';
import ActualizarUsuario from './ActualizarUsuario.vue';
import NuevoUsuario from './NuevoUsuario.vue';
import { deleteUsuarioFachada } from '../helpers/deleteUsuario';
export default {
    components: {
        ActualizarUsuario, NuevoUsuario
    },
    data() {
        return {
            usuarios: null,
            visible: false,
            visibleActualizar: false,
            selectedUsuario: null,
            menuModel: [
                { label: 'Eliminar', icon: 'pi pi-fw pi-times', command: () => this.deleteUsuario(this.selectedUsuario.id) }
            ]
        }
    },
    methods: {
        onRowContextMenu(event) {
            this.$refs.cm.show(event.originalEvent);
        },
        async obtenerUsuarios() {
            await getUsuariosFachada().then(usuarios => {
                this.usuarios = usuarios;
                console.log(usuarios);
            })
        },
        insertarUsuario() {
            this.visible = false
            this.$toast.add({
                severity: "success",
                summary: "Success Message",
                detail: "Usuario creado correctamente",
                life: 3000,
            });
        },
        async deleteUsuario(id) {
            await deleteUsuarioFachada(id).then(() => {
                this.obtenerUsuarios();
                this.$toast.add({
                    severity: "success",
                    summary: "Success Message",
                    detail: "Usuario eliminado correctamente",
                    life: 3000,
                });
            })
            console.log(id)
        }
    },
    mounted() {
        this.obtenerUsuarios();
    }
}
</script>
<style lang="">

</style>