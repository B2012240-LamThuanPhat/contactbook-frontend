<template>
    <div class="page">
        <h4>Thêm Liên Hệ Mới</h4>
        <ContactForm @submit:contact="createContact" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            message: "",
        };
    },
    methods: {
        async createContact(data) {
            try {
                await ContactService.create(data);
                this.message = "Thêm thành công";
            } catch (err) {
                console.log(err);
            }
        },
    },
    created() {
        this.message = "";
    },
};
</script>
  