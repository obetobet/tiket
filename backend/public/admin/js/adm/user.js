 $(document).ready(function () {
        $('#tgl_lahir').datepicker({
            format: "yyyy-m-d",
            autoclose: true,
            changeYear: true,
            startDate: new Date('1970-3-26'),
            endDate: new Date('2000-3-26')
        });

            //Alternativ way
            $('#tgl_lahir').datepicker({
                format: "yyyy-m-d",
            }).on('change', function () {
                $('.datepicker').hide();
            });

            $('#tgl_edit').datepicker({
                format: "yyyy-m-d",
                autoclose: true,
                changeYear: true,
                startDate: new Date('1970-3-26'),
                endDate: new Date('2000-3-26')
            });

            //Alternativ way
            $('#tgl_edit').datepicker({
                format: "yyyy-m-d",
            }).on('change', function () {
                $('.datepicker').hide();
            });

    });


 $(document).ready(function () {
     $('#mytable').DataTable();

     //showing data to modal for edit record
     $('#mytable').on('click', '.edit', function () {
         var id = $(this).data('id');
         var nama = $(this).data('nama');
         var email = $(this).data('email');
         var role = $(this).data('role');
         var status = $(this).data('status');
         var no_telp = $(this).data('no_telp');
         var jenis_kelamin = $(this).data('jenis_kelamin');
         var tanggal_lahir = $(this).data('tanggal_lahir');

         function formatDate(date) {
             var d = new Date(date),
                 month = '' + (d.getMonth() + 1),
                 day = '' + d.getDate(),
                 year = d.getFullYear();

             if (month.length < 2) month = '0' + month;
             if (day.length < 2) day = '0' + day;

             return [year, month, day].join('-');
         }

         var format = formatDate(tanggal_lahir);
         $('#EditModal').modal('show');
         $('#nama_edit').val(nama);
         $('#email_edit').val(email);
         $('#telp_edit').val(no_telp);
         $('#role_edit').val(role);
         $('#status_edit').val(status);
         $('#tgl_edit').val(format);
         $('#jk_edit').val(jenis_kelamin);
     });
     //showing modal for delete record
     $('#mytable').on('click', '.delete', function () {
         var id = $(this).data('id');
         var nama = $(this).data('nama');
         $('#DeleteModal').modal('show');
         $('.id_tiket').val(id);
         $('#myModalLabel').html('Delete : ' + nama);
     });

 });