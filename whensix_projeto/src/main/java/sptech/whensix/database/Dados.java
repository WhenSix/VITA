package sptech.whensix.database;

public class Dados {
    private Integer idDado;

    private Integer cdgCidade;
    private String sexo;
    private Float peso;
    private Integer altura;
    private String frequenciaRefri;
    private String tipoRefri;
    private String qtdRefri;
    private Boolean alcoolismo;
    private String freqAlcool;
    private String exercicioFisico;
    private String tipoExercicioFisico;
    private String freqExercicioFisico;
    private Boolean fumante;
    private Integer qtdCigarrosDia;

    public Dados(Integer idDado, Integer cdgCidade, String sexo, Float peso, Integer altura, String frequenciaRefri, String tipoRefri, String qtdRefri, Boolean alcoolismo, String freqAlcool, String exercicioFisico, String tipoExercicioFisico, String freqExercicioFisico, Boolean fumante, Integer qtdCigarrosDia) {
        this.idDado = idDado;
        this.cdgCidade = cdgCidade;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.frequenciaRefri = frequenciaRefri;
        this.tipoRefri = tipoRefri;
        this.qtdRefri = qtdRefri;
        this.alcoolismo = alcoolismo;
        this.freqAlcool = freqAlcool;
        this.exercicioFisico = exercicioFisico;
        this.tipoExercicioFisico = tipoExercicioFisico;
        this.freqExercicioFisico = freqExercicioFisico;
        this.fumante = fumante;
        this.qtdCigarrosDia = qtdCigarrosDia;
    }

    public Integer getIdDado() {
        return idDado;
    }

    public void setIdDado(Integer idDado) {
        this.idDado = idDado;
    }

    public Integer getCdgCidade() {
        return cdgCidade;
    }

    public void setCdgCidade(Integer cdgCidade) {
        this.cdgCidade = cdgCidade;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public Float getPeso() {
        return peso;
    }

    public void setPeso(Float peso) {
        this.peso = peso;
    }

    public Integer getAltura() {
        return altura;
    }

    public void setAltura(Integer altura) {
        this.altura = altura;
    }

    public String getFrequenciaRefri() {
        return frequenciaRefri;
    }

    public void setFrequenciaRefri(String frequenciaRefri) {
        this.frequenciaRefri = frequenciaRefri;
    }

    public String getTipoRefri() {
        return tipoRefri;
    }

    public void setTipoRefri(String tipoRefri) {
        this.tipoRefri = tipoRefri;
    }

    public String getQtdRefri() {
        return qtdRefri;
    }

    public void setQtdRefri(String qtdRefri) {
        this.qtdRefri = qtdRefri;
    }

    public Boolean getAlcoolismo() {
        return alcoolismo;
    }

    public void setAlcoolismo(Boolean alcoolismo) {
        this.alcoolismo = alcoolismo;
    }

    public String getFreqAlcool() {
        return freqAlcool;
    }

    public void setFreqAlcool(String freqAlcool) {
        this.freqAlcool = freqAlcool;
    }

    public String getExercicioFisico() {
        return exercicioFisico;
    }

    public void setExercicioFisico(String exercicioFisico) {
        this.exercicioFisico = exercicioFisico;
    }

    public String getTipoExercicioFisico() {
        return tipoExercicioFisico;
    }

    public void setTipoExercicioFisico(String tipoExercicioFisico) {
        this.tipoExercicioFisico = tipoExercicioFisico;
    }

    public String getFreqExercicioFisico() {
        return freqExercicioFisico;
    }

    public void setFreqExercicioFisico(String freqExercicioFisico) {
        this.freqExercicioFisico = freqExercicioFisico;
    }

    public Boolean getFumante() {
        return fumante;
    }

    public void setFumante(Boolean fumante) {
        this.fumante = fumante;
    }

    public Integer getQtdCigarrosDia() {
        return qtdCigarrosDia;
    }

    public void setQtdCigarrosDia(Integer qtdCigarrosDia) {
        this.qtdCigarrosDia = qtdCigarrosDia;
    }
}
