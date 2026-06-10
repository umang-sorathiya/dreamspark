 const handleSubmit = async () => {
  alert("BUTTON CLICKED")

  console.log("FORM DATA:", form)

  setLoading(true)

  try {
    const { data, error } = await supabase
      .from('enquiries')
      .insert([form])
      .select()

    console.log("DATA:", data)
    console.log("ERROR:", error)

    if (error) {
      alert("ERROR: " + error.message)
      return
    }

    alert("SUCCESS")

    setSuccess(true)

    setForm({
      full_name: '',
      father_name: '',
      email: '',
      mobile: '',
      address: '',
      city: '',
      pincode: '',
      message: '',
      course: ''
    })

  } catch (err: any) {
    console.log("CATCH ERROR:", err)
    alert("CATCH ERROR: " + err.message)
  } finally {
    setLoading(false)
  }
}